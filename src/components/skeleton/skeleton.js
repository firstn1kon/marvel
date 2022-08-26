import './skeleton.scss';

function Skeleton() {
  return (
    <>
        <h3>Please select a character to see information</h3>
        <div className="skeleton">
            <div className="skeleton__circleLine">
                <div className="skeleton__circle"></div>
                <div className="skeleton__line"></div>
            </div>
            <div className="skeleton__line skeleton__line_solid"></div>
            <div className="skeleton__line skeleton__line_solid"></div>
            <div className="skeleton__line skeleton__line_solid"></div>
        </div>
    </>

  );
}

export default Skeleton;
