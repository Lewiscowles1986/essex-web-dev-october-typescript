import c from '../data/example.json';

interface DataSourceInterface {
  [key: string]: Person;
}

interface Person {
  skills: string[];
  Job?: string;
};

const getPerson = (name: string, data?: DataSourceInterface): Person[] => {
    const dataSource = data ? data : c;
    return Object.keys(dataSource)
        .filter(name => name.toLowerCase() === name.toLowerCase())
        .map(name => dataSource[name]);
};
