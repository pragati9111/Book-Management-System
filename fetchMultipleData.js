const fetchMultipleData = async () => {
  const [response1, response2] = await Promise.all([
    fetch('/api/data1'),
    fetch('/api/data2')
  ]);
  const data1 = await response1.json();
  const data2 = await response2.json();
  return { data1, data2 };
};