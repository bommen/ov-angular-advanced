interface Identifier {
  id: string;
}

export interface Normalized<T extends Identifier> {
  byId: { [id: string]: T };
  allIds: string[];
}

export const normalize = <T extends Identifier>(
  collection: T[]
): Normalized<T> =>
  collection.reduce(
    ({ allIds, byId }, t) => ({
      allIds: [...allIds, t.id],
      byId: {
        ...byId,
        [t.id]: t,
      },
    }),
    {
      byId: {},
      allIds: [],
    } as Normalized<T>
  );

export const toArray = <T extends Identifier>({
  byId,
  allIds,
}: Normalized<T>): T[] => allIds.map((id) => byId[id]);
