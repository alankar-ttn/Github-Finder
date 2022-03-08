import React, { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import UserItem from "./UserItem";

const UserResults = () => {
	const { users, loading } = useContext(GithubContext);

	if (loading) {
		return <h1>Loading...</h1>;
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
