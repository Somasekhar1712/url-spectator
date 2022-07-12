// and displays it in a modal
import urlMetadata from "url-metadata";

function getMetadata(url: string) {
  // console.log("url",url)
  urlMetadata(url).then(
    function (metadata: any) {
      // success handler
      console.log("metadata", metadata);
    },
    function (error: any) {
      // failure handler
      console.log("error", error);
    }
  );
}

getMetadata("https://google.com");
