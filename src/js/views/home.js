import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [image, setImage] = useState("");
	const [loading, setLoading] = useState(false);

	const uploadImage = async e => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "x0fnuaoq");
		setLoading(true);
		const res = await fetch(" https://api.cloudinary.com/v1_1/dozmokkz8/image/upload", {
			method: "POST",
			body: data
		});
		const file = await res.json();
		setImage(file.secure_url);
		// setAllinObject({ ...allinObject, image: file.secure_url });

		setLoading(false);
	};
	console.log("image", image);
	return (
		<div className="text-center mt-5">
			<div className="text-center mt-5">
				<div className="row">
					<div className="col-md-6">
						<form method="post" action="#" id="#">
							<div className="form-group files color">
								<p className="float">Congratulation guys!!!! You are almost junior developers</p>
								<label
									style={{
										padding: "6px 6px",
										background: "white",
										boxShadow: "4px 4px 4px 2px grey",
										width: "50%",
										height: "150px"
									}}>
									<input
										type="file"
										name="file"
										style={{ display: "none", overflow: "hidden" }}
										// placeholder="Upload an image"
										onChange={uploadImage}
									/>
									{loading ? (
										<h3>Loading...</h3>
									) : (
										<img
											src={image}
											style={{
												width: "100px",
												height: "100%"
											}}
										/>
									)}
								</label>{" "}
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
