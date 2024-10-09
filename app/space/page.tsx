//"use client"

//import { Apod } from '../components/Apod';

// interface apodresponce {
//   date: string;
//   explanation: string;
//   hdurl: string;
//   media_type: string;
//   service_version: string;
//   title: string;
//   url: string;
// }

export default async function SpacePage() {
  // const pictureData = await fetch(
  //   'https://api.nasa.gov/planetary/apod?api_key=pJFVxyEmQvfBbQpGNXV9xe1gZaeKG1DxgFlsDAfC'
  // );

  // const result: apodresponce = await pictureData?.json();
  return (
    <main>
      <div>
        <h1>Picture of this day</h1>
        {/* {<Apod srcAttribute={result.url} altAttribute={result.title} />} */}
      </div>
    </main>
  );
}
