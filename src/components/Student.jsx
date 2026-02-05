function Student(props) {
  const { name, age } = props;
  
  return (
    <h2>
      Name: {name}, Age: {age}
    </h2>
  );
}

export default Student;