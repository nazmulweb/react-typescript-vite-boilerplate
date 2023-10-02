import Button from '../button';

function LoadingScreen() {
  return (
    <div
      className="bg-style"
      style={{
        background: 'url(public/loading-screen.png)',
        backgroundSize: '100% 100%',
      }}
    >
      <Button
        className="absolute bottom-[80px] left-1/2 -translate-x-1/2"
        title="শুরু করুন"
      />
    </div>
  );
}

export default LoadingScreen;
