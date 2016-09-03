import React from 'react';
import VideoListItem from './video_list_item';

// since this component don't record any state or user interaction
// we can just make it a plain functional component
const VideoList = (props) => {
  // passing the props object, which contains videos and others
  // from functional component to class-based component
  // we'll need to reference props -> this.props

  // Try stay away from FOR loops, instead use built-in iterators, map
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {/*{ props.videos.length }*/}
      {videoItems}
    </ul>
  );
};

export default VideoList;