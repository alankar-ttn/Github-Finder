import axios from "axios";
import { Navigate } from "react-router-dom";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
	baseURL: GITHUB_URL,
	headers: {
		Authorization: `Bearer ${GITHUB_TOKEN}`,
	},
});

export const searchUsers = async (text) => {
	const param = new URLSearchParams({
		q: text,
	});

	const res = await github.get(`/search/users?${param}`);
	return res.data.items;
};

export const getUserAndRepos = async (login) => {
	const params = new URLSearchParams({
		sort: "created",
		per_page: 10,
	});
	const [user, repos] = await Promise.all([
		github.get(`/users/${login}`),
		github.get(`/users/${login}/repos?${params}`),
	]);

	return { user: user.data, repos: repos.data };
};
