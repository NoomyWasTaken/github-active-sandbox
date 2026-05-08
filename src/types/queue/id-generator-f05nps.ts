/**
 * Public types for id generator.
 * Imported by the worker.
 */

export type IdGenerator = {
  id: string;
  createdAt: string;
  status: "active" | "pending" | "archived";
};

export type IdGeneratorPatch = Partial<Pick<IdGenerator, "status">>;

export const isActive = (value: IdGenerator): boolean => value.status === "active";
