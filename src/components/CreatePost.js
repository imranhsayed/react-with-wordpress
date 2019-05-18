import React from 'react';

class CreatePost extends React.Component {
	render() {
		return(
			<div className="container">
				<form>
					<label className="form-group">
						<input type="text" className="form-control" name="title"/>
					</label>
					<label className="form-group">
						<textarea cols="20" rows="30" className="form-control" name="content"/>
					</label>
				</form>

			</div>
		)
	}
}

export default CreatePost
