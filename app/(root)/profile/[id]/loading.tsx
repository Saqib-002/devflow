import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section>
      <div className="flex flex-col items-start gap-4 lg:flex-row">
        <Skeleton className="background-light700_dark300 h-36 w-36 rounded-full" />

        <div className="mt-3">
          <Skeleton className="background-light700_dark300 h-7 w-28" />
          <Skeleton className="background-light700_dark300 mt-3 h-7 w-20" />

          <div className="mt-5 flex flex-wrap items-center justify-start gap-5">
            <Skeleton className="background-light700_dark300 h-9 w-36" />
            <Skeleton className="background-light700_dark300 h-9 w-36" />
          </div>

          <Skeleton className="background-light700_dark300 mt-8 h-7 w-9/12" />
        </div>
      </div>

      <div className="mb-12 mt-10">
        <Skeleton className="background-light700_dark300 h-7 w-full" />

        <div className="mt-5 grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-4">
          <Skeleton className="background-light700_dark300 h-28 rounded-md" />
          <Skeleton className="background-light700_dark300 h-28 rounded-md" />
          <Skeleton className="background-light700_dark300 h-28 rounded-md" />
          <Skeleton className="background-light700_dark300 h-28 rounded-md" />
        </div>
      </div>

      <div className="mt-10 flex gap-10">
        <div className="flex flex-1 flex-col">
          <div className="flex">
            <Skeleton className="background-light700_dark300 h-11 w-24 rounded-r-none" />
            <Skeleton className="background-light700_dark300 h-11 w-24 rounded-l-none" />
          </div>

          <div className="mt-5 flex w-full flex-col gap-6">
            {[...Array(5)].map((_, i) => (
              <Skeleton
                key={i}
                className="background-light700_dark300 h-48 w-full rounded-xl"
              />
            ))}
          </div>
        </div>

        <div className="flex min-w-[278px] flex-col max-lg:hidden">
          <Skeleton className="background-light700_dark300 h-7 w-10" />

          <div className="mt-7 flex flex-col gap-4">
            <Skeleton className="background-light700_dark300 h-7" />
            <Skeleton className="background-light700_dark300 h-7" />
            <Skeleton className="background-light700_dark300 h-7" />
            <Skeleton className="background-light700_dark300 h-7" />
            <Skeleton className="background-light700_dark300 h-7" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
