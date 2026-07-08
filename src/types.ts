export type AnimalType = 'Dog' | 'Cat';
export type Gender = 'Male' | 'Female';

export interface Animal {
  id: string;
  name: string;
  type: AnimalType;
  breed: string;
  age: string;
  gender: Gender;
  personality: string;
  health: string;
  images: string[];
}
