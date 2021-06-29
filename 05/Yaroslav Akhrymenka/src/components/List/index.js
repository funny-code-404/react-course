import React from "react";
import "./style.css";
class List extends React.Component {
	state = {
		listData: [],
		checkedArticles: {
			id: "",
			checked: false,
		},
	};

	componentDidUpdate = (prevProps) => {
		if (this.props.taskFromForm !== prevProps.taskFromForm) {
			this.setState((prevstate) => ({
				...prevstate,
				listData: this.state.listData.concat(this.props.taskFromForm),
			}));
		}
	};

	handleDeleteItem = (e) => {
		this.setState((prevstate) => ({
			listData: prevstate.listData.filter(
				(_, i) => i !== Number(e.target.dataset.id)
			),
		}));
	};
	handleChecked = (e) => {
		this.setState((prevstate) => ({
			...prevstate,
			checkedArticles: {
				id: e.target.dataset.id,
				checked: !prevstate.checkedArticles.checked,
			},
		}));
	};

	render() {
		const { listData, checkedArticles } = this.state;
		return (
			<>
				{listData.map((element, i) => {
					return (
						<article
							key={i}
							id={i}
							className={
								Number(checkedArticles.id) === i && checkedArticles.checked
									? "checked"
									: "article"
							}
						>
							<div className="caption">
								<span>{i + 1}</span>
								<p>{element}</p>
							</div>

							<button
								className="remove-item"
								data-id={i}
								onClick={this.handleDeleteItem}
							>
								✕
							</button>
							<button
								className="jobs-done"
								data-id={i}
								onClick={this.handleChecked}
							>
								✓
							</button>
						</article>
					);
				})}
			</>
		);
	}
}

export default List;
