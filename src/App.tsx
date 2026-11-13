import React from 'react';
import { Axye, useAxye, track } from 'axye';


interface MyStoreState {
  value: string;
  count: number;
}

class MyStore extends Axye<unknown, MyStoreState> {
  state = {
    value: '',
    count: 0,
  };

  setValue(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }
  
  incCount() {
    this.setState((s) => s.count++);
  }

  @track
  async clearValue() {
    await new Promise((r) => setTimeout(r, 1000));

    this.setState((s) => {
      s.count--;
      return { value: '' };
    });
  }
}


function First() {
  const { state: { count }, incCount } = useAxye(MyStore);
  
  console.log(1);
  return <button onClick={incCount}>{count}</button>;
}

function Second() {
  const { state: { value, isLoading }, setValue, clearValue } = useAxye(MyStore);
  
  console.log(2);
  return (
    <div>
      <input value={value} onChange={setValue} />
      <button disabled={isLoading} onClick={clearValue}>clear</button>
    </div>
  );
}


function App() {
  return (
    <MyStore>
      <First />
      <Second />
    </MyStore>
  );
}

export default App;
