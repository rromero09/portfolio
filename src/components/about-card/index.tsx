import { skeleton } from '../../utils';

const AboutCard = ({
  loading,
  aboutMe,
}: {
  loading: boolean;
  aboutMe: string;
}) => {
  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">About Me</span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-sm opacity-80 mx-3 mt-2">
          {loading
            ? skeleton({ widthCls: 'w-full', heightCls: 'h-24' })
            : aboutMe}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
