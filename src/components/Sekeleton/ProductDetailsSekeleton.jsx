import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="p-4">
            <div className="w-full h-[320px] md:h-[500px] rounded-2xl bg-base-300" />
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <div className="h-10 w-3/4 bg-base-300 rounded-lg" />
            <div className="h-6 w-1/2 bg-base-300 rounded-lg mt-3" />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="h-8 w-32 bg-base-300 rounded-lg" />
            <div className="h-10 w-28 bg-base-300 rounded-full" />
            <div className="h-10 w-24 bg-base-300 rounded-full" />
          </div>

          <div className="bg-base-200 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="h-10 w-32 bg-base-300 rounded-lg" />
              <div className="h-7 w-24 bg-base-300 rounded-lg" />
              <div className="h-8 w-20 bg-base-300 rounded-full" />
            </div>
          </div>

          <div className="card bg-base-100 shadow-md border border-base-200">
            <div className="card-body space-y-4">
              <div className="h-8 w-48 bg-base-300 rounded-lg" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-base-300 rounded" />
                <div className="h-4 w-full bg-base-300 rounded" />
                <div className="h-4 w-11/12 bg-base-300 rounded" />
                <div className="h-4 w-10/12 bg-base-300 rounded" />
                <div className="h-4 w-full bg-base-300 rounded" />
                <div className="h-4 w-9/12 bg-base-300 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;