import React from "react";
import useGithub from "../../context/github/GithubContext";
import Loader from "../layout/Loader";
import UserItem from "./UserItem";

const UserResults = () => {
	const { users, loading } = useGithub();

	if (loading) {
		return <Loader />;
	}

	if (users.length < 1) {
		return <h1 className="text-4xl">No Results to Show</h1>;
	}

	return (
		<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3">
			{users.map((user) => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	);
};

export default UserResults;
