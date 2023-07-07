import React from "react";
import {
  Card,
  CardSubtitle,
  CardText,
  CardTitle,
  CardBody,
  CardImg,
} from "reactstrap";

function Body({
  firstName,
  lastName,
  profilePic,
  stars,
  comment,
  timestamp,
}: {
  firstName: string;
  lastName: string;
  profilePic: string;
  stars: number;
  comment: string;
  timestamp: number;
}) {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h1">Reviews Page</CardTitle>
        <div className="reviews-top">
          <div className="user-details">
            <CardImg
              className="avatar"
            //   src={
            //     profilePic ||
            //     https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
            //   }
              alt="user avatar"
            />

            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {firstName} {lastName || "John Doe"}
            </CardSubtitle>
            {[...Array(stars || 5)].map((star) => {
              return <CardSubtitle tag="h5">⭐ </CardSubtitle>;
            })}
          </div>
          <div className="reviews-body">
            <CardText>
              {comment ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis delectus dignissimos, nisi pariatur fuga officiis itaque fugiat! Quibusdam accusantium quae beatae vel.Quas possimus reprehenderit sequi quia nesciunt sunt!"}
            </CardText>
          </div>
          <CardText>
            <small className="text-muted text-bold">
              {timestamp || "3 mins ago"}
            </small>
          </CardText>
        </div>
      </CardBody>
    </Card>
  );
}

export default Body;