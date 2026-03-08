"use client";

const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md border border-base-200 animate-pulse">
      <div className="p-4">
        <div className="h-56 w-full rounded-xl bg-base-300" />
      </div>

      <div className="card-body pt-0 space-y-3">
        <div className="h-5 w-3/4 rounded bg-base-300" />
        <div className="h-4 w-1/2 rounded bg-base-300" />

        <div className="flex items-center gap-2">
          <div className="h-4 w-16 rounded bg-base-300" />
          <div className="h-4 w-24 rounded bg-base-300" />
        </div>

        <div className="h-4 w-20 rounded bg-base-300" />

        <div className="flex items-center gap-2">
          <div className="h-6 w-20 rounded bg-base-300" />
          <div className="h-5 w-16 rounded bg-base-300" />
          <div className="h-5 w-14 rounded bg-base-300" />
        </div>

        <div className="pt-2">
          <div className="h-10 w-full rounded-lg bg-base-300" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;