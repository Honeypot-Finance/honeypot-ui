import { PeddingSvg } from "./Pedding";
import { RocketSvg } from "./Rocket";

interface LoadingDisplayProps {
  loadingText?: string;
  showRocket?: boolean;
  showPedding?: boolean;
}

export function LoadingDisplay({
  loadingText = "Loading...",
  showRocket = true,
  showPedding = true,
}: LoadingDisplayProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative">
        {showPedding && <PeddingSvg />}
        {showRocket && (
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <RocketSvg />
          </div>
        )}
      </div>

      {!!loadingText && (
        <div className="text-gold-primary mt-[59px] font-bold">
          {loadingText}
        </div>
      )}
    </div>
  );
}

export const LoadingContainer = ({
  isLoading,
  children,
  text,
}: {
  children: React.ReactNode;
  isLoading: boolean;
  text?: string;
}) => {
  return isLoading ? <LoadingDisplay /> : children;
};
