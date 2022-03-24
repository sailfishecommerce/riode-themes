export default function SummerBanner() {
  return (
    <>
      <section className="py-8 summer-banner justify-center flex flex-col items-auto">
        <div className="content text-white mx-auto items-center flex flex-col">
          <div className="flex items-center mb-3">
            <span>Extra</span>
            <span>30 Off</span> <span>Online</span>
          </div>
          <h2 className="font-bold my-4 text-4xl">Summer Season Sale</h2>
          <p className="my-4 ">Free shipping on orders over $99.00</p>
          <button className="shop-now px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-sm">
            SHOP NOW
          </button>
        </div>
      </section>
      <style jsx>
        {`
          .summer-banner {
            background-image: url("./banner_parallex.webp");
          }
        `}
      </style>
    </>
  );
}
