import { useCallback, useEffect } from 'react';
import useActiveBlockIdDispatch from '../redux/hooks/dispatch.hooks/use.active.block.dispatch';

const useDeactivateBlock = () => {
  const setActiveBlockId = useActiveBlockIdDispatch();

  const deactivateBlockOnMouseClick = useCallback(() => {
    setActiveBlockId('');
  }, []);

  const deactivateBlockOnEscapeOrEnterClick = (event: KeyboardEvent) => {
    if (event.key === 'Escape' || event.key === 'Enter') {
      setActiveBlockId('');
    }
  };

  useEffect(() => {
    document.addEventListener('click', deactivateBlockOnMouseClick);

    document.addEventListener('keydown', deactivateBlockOnEscapeOrEnterClick);

    return () => {
      document.removeEventListener('click', deactivateBlockOnMouseClick);

      document.removeEventListener(
        'keydown',
        deactivateBlockOnEscapeOrEnterClick
      );
    };
  }, []);
};

export default useDeactivateBlock;
