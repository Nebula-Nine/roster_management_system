import clsx from 'clsx';

export default function ContractType({ contract }: { contract: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-violet-400 text-white': contract === 'Full-time',
          'bg-green-400 text-white': contract === 'Part-time',
          'bg-orange-400 text-white': contract === 'Casual',
        },
      )}
    >
      {contract === 'Full-time' ? (
        <>
          Full-time
        </>
      ) : null}
      {contract === 'Part-time' ? (
        <>
          Part-time
        </>
      ) : null}
      {contract === 'Casual' ? (
        <>
          Casual
        </>
      ) : null}
    </span>
  );
}