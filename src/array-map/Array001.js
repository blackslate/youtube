import personalInformation from './data';
console.log("🚀 ~ file: Array001.js:2 ~ personalInformation:", personalInformation)

import Personal from './Personal';

export default function Array001() {
  const personalInfo = personalInformation.map((info, index) => (
    <Personal   key={index} 
                {...info} />
  
  ));

  return (
    <>
      <div>{personalInfo}</div>
    </>
  );
}
