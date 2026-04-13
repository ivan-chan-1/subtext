import type { LineDetails } from "../types";

const LineCard = ({text, start}: LineDetails) => {
  return (
    <div className="card card-border bg-base-100">
      <div className="card-body">
        <div className="flex gap-5">
          <div>{start}</div>
          <div className="divider divider-horizontal" />
          <div>
            {text.map((w) => {return (<><a className="link link-hover">{w}</a>{" "}</>)})}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineCard;
