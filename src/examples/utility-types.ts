/* eslint-disable @typescript-eslint/no-unused-vars */
interface ABC {
  a: boolean;
  b: boolean;
  c: boolean;
}

type OptionalABC = Partial<ABC>; // All optional props

type PickedFromABC = Pick<ABC, 'c' | 'b'>; // Pick specific props

type ExcludeFromAVC = Omit<ABC, 'c'>; // Omit / Exclude specific props

type ReadOnlyABC = Readonly<ABC>; // Readonly all props similiar to Required

// If you want to use Record to create a type that includes only the property c and its possible values

interface ABC2 {
  a?: PropertyCValues;
  b?: PropertyCValues;
  c?: PropertyCValues;
}
type PropertyCValues = boolean;

type RecordABC = Record<'c', PropertyCValues>;

const WithOptional: OptionalABC = {
  a: true,
};

const WithPickedC: PickedFromABC = {
  c: true,
  b: true,
};

const WithoutC: ExcludeFromAVC = {
  a: true,
  b: true,
};

const WithRecordC: RecordABC = {
  c: true,
};

const WithReadonly: ReadOnlyABC = {
  a: true,
  b: true,
  c: true,
};
