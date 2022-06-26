import React from "react";

const NewsItem =(props)=> {
    let { title, description, imageUrl, newsUrl, author, date,source} = props;
    return (
      <div>
        <div className="card mb-3">
        <div style={{display:"flex", justifyContent:"flex-end", position:"absolute",right:"0"}}>
            <span className=" badge rounded-pill bg-danger">
              {source}
            </span>
            </div>
          <img
            src={
              !imageUrl
                ? "https://images.indianexpress.com/2022/05/InSight-rover-last-selfie-NASA.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" >{title}...</h5>
            
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-warning">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark "
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
   }

export default NewsItem;
