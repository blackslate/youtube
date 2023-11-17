
import Design from './Design';
import data from './data';

export default function Mapping() {
  const travelData = data.map((item, idx) => (
    <Design
      key={idx}
      {...item}
    />
  ));

  return (
    <div>
      {travelData}
    </div>
  );
}
