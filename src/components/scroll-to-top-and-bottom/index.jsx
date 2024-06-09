import { useRef } from "react";
import useFetchCustomHook from "../Use-fetch";

const ScrollToTopAndBottom = () => {
  const { data, error, loading } = useFetchCustomHook(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const endOfListRef = useRef(null);
  const topOfListRef = useRef(null);

  function handlescrollToBottom() {
    endOfListRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleScrollTop() {
    topOfListRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <h1>Scroll to top and bottom Feature</h1>
      <h3 ref={topOfListRef}>This is the top section</h3>
      <button style={{ margin: "1rem" }} onClick={handlescrollToBottom}>
        Scroll To Bottom
      </button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((product, index) => (
              <li
                key={product.id}
                ref={index === data.products.length - 1 ? endOfListRef : null}
                style={{ listStyle: "none" }}
              >
                {product.title}
              </li>
            ))
          : null}
      </ul>
      <button style={{ margin: "1rem" }} onClick={handleScrollTop}>
        Scroll To Top
      </button>
    </div>
  );
};

export default ScrollToTopAndBottom;
