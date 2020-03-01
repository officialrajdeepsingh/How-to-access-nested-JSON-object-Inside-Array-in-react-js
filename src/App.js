import React, {Component} from "react";


//react bootstrap components
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//scss
import style from "./styles.module.scss";

//data for post
import data from "./data.json";

export default class DefaultPost extends Component {
	render() {
		return (
			<>
				<Container fluid={true}>
					<Row>
						<CardDeck className=' no-gutters '>
							{data.map((postData) => {
								console.log(postData);
								return (
									<Card  key={postData.id}>
										<Card.Img variant="top" src={postData.image} />
										<Card.Body>
											<Card.Title className={style.tile}>
												{postData.title}
											</Card.Title>
											<Card.Subtitle className={style.tag}>
												{postData.tag + " "}
											</Card.Subtitle>

											<Card.Text className={style.para}>
												{postData.body}
											</Card.Text>
										</Card.Body>
									</Card>
								);
							})}
						</CardDeck>
					</Row>
				</Container>
			</>
		);
	}
}
