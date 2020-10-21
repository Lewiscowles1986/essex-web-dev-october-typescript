import c from '../data/example.json';

interface PersonBase {
  skills?: string[];
};
interface PersonWithJob extends PersonBase {
  Job: string;
}

type Person = PersonBase | PersonWithJob;

interface DataSourceInterface {
  [key: string]: Person;
}

export const getPerson = (name: string, data?: DataSourceInterface): Person[] => {
    const dataSource = data ? data : c;
    return Object.keys(dataSource)
        .filter(personName => name.toLowerCase() === personName.toLowerCase())
        .map(personName => dataSource[personName]);
};
