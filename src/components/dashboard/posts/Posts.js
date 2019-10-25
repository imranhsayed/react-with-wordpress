import React from 'react';
import DashboardLayout from "../../layouts/DashboardLayout";

const Posts = ( props ) => {

	return(
		<DashboardLayout>
			<table className="table table-hover">
				<thead>
				<tr>
					<th scope="col">Title</th>
					<th scope="col">Author</th>
					<th scope="col">Categories</th>
					<th scope="col">Date</th>
					<th scope="col">Edit</th>
					<th scope="col">Delete</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<th scope="row">Active</th>
					<td>Column content</td>
					<td>Column content</td>
					<td>Column content</td>
					<td>Column content</td>
					<td>Column content</td>
				</tr>
				<tr>
					<th scope="row">Default</th>
					<td>Column content</td>
					<td>Column content</td>
					<td>Column content</td>
					<td>Column content</td>
				</tr>
				</tbody>
			</table>
		</DashboardLayout>
	);
};

export default Posts;
