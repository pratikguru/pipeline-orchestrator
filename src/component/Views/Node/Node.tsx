import React from 'react';
import { Handle, Node, NodeToolbar, Position } from 'reactflow';



export const withWrapper = (WrappedComponent: unknown) => {
  const NewComponent = (props: Node) => {
    const [visible, setVisible] = React.useState<boolean>(false);
    return (
      <>
        <Handle
          type="target"
          position={Position.Left}
          id="a"
          style={{ background: '#ff9090', height: '50px', width: '20px', borderRadius: '5px', left: -10, zIndex: 100}}
          isConnectable={true}
        />
        <NodeToolbar
          position={Position.Top}
          isVisible={visible}
        >
          <div style={{
            height: '50px',
            width: '100px',
            minWidth: '20px',
            padding: '5px',
            display: 'flex',
            background: 'yellow',
            borderRadius: '2px',
            gap: '5px'
          }}>
          
          </div>
        </NodeToolbar>
        <WrappedComponent {...props.data} onClick={ () => setVisible( !visible ) } />
        <Handle
          type='source'
          position={Position.Right}
          id="b"
          style={{ background: '#ff9090', height: '50px', width: '20px', borderRadius: '5px', right: -10}}
          isConnectable={true}
        />
      </>
    );
  };

  return NewComponent;
};


