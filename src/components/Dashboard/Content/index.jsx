import React, {useState} from "react"
import image from "../../../assets/image.jpeg"
import {useDispatch} from "react-redux"
import {ADD_TO_CART} from "../../../store/constants"

const Content = () => {
  const [state, setstate] = useState({
    heading: "Another headline",
    details: "And an even wittier subheading.",
    price: 12.33,
    img: image,
  })
  const dispatch = useDispatch()

  const handleAddToCart = (e) => {
    e.preventDefault()
    dispatch({type: ADD_TO_CART, payload: state})
  }

  return (
    <main>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">Punny headline</h1>
          <p className="lead fw-normal">
            And an even wittier subheading to boot. Jumpstart your marketing
            efforts with this example based on Apple’s marketing pages.
          </p>
          <a className="btn btn-outline-secondary" href="#">
            Coming soon
          </a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">{state.heading}</h2>
            <p className="lead">{state.details}</p>
            <button
              className="btn btn-primary btn-sm"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
          <div
            className="bg-light shadow-sm mx-auto"
            style={{width: "80%", height: 300, borderRadius: "21px 21px 0 0"}}
          >
            <img
              src={image}
              alt=""
              style={{
                width: "100%",
                height: 300,
                borderRadius: "21px 21px 0 0",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-dark shadow-sm mx-auto"
            style={{width: "80%", height: 300, borderRadius: "21px 21px 0 0"}}
          ></div>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-dark shadow-sm mx-auto"
            style={{width: "80%", height: 300, borderRadius: "21px 21px 0 0"}}
          ></div>
        </div>
        <div className="bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-light shadow-sm mx-auto"
            style={{width: "80%", height: 300, borderRadius: "21px 21px 0 0"}}
          ></div>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-body shadow-sm mx-auto"
            style={{width: "80%", height: 300, borderRadius: "21px 21px 0 0"}}
          ></div>
        </div>
        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-body shadow-sm mx-auto"
            style={{width: "80%", height: 300, borderRadius: "21px 21px 0 0"}}
          ></div>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-body shadow-sm mx-auto"
            style={{width: "80%", height: 300, borderRadius: "21px 21px 0 0"}}
          ></div>
        </div>
        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-body shadow-sm mx-auto"
            style={{width: "80%", height: 300, borderRadius: "21px 21px 0 0"}}
          ></div>
        </div>
      </div>
    </main>
  )
}

export default Content
