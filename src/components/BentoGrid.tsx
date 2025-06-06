import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[5rem] md:grid-cols-3',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-6 transition duration-200 dark:border-white/[0.2] dark:bg-black',
        className,
      )}
    >
      <div className='transition duration-200 group-hover/bento:translate-x-3'>
        <div className='my-2 font-sans text-lg font-bold text-neutral-600 dark:text-neutral-200'>
          {title}
        </div>
        <div className='font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300'>
          {description}
        </div>
      </div>
    </div>
  );
};
