import React from "react"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header class="site-header sticky-top py-1">
      <nav class="container d-flex flex-column flex-md-row justify-content-between">
        <Link class="py-2" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="d-block mx-auto"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>Product</title>
            <circle cx="12" cy="12" r="10" />
            <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
          </svg>
        </Link>
        <Link class="py-2 d-none d-md-inline-block" to="/">
          Tour
        </Link>
        <Link class="py-2 d-none d-md-inline-block" to="/">
          Product
        </Link>
        <Link class="py-2 d-none d-md-inline-block" to="/">
          Features
        </Link>
        <Link class="py-2 d-none d-md-inline-block" to="/">
          Enterprise
        </Link>
        <Link class="py-2 d-none d-md-inline-block" to="/">
          Support
        </Link>
        <Link class="py-2 d-none d-md-inline-block" to="/">
          Pricing
        </Link>
        <Link class="py-2 d-none d-md-inline-block" to="/">
          Cart
        </Link>
      </nav>
    </header>
  )
}

export default Header