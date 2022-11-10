import React from 'react';
import { chainId, useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

const Header = () => {
  const { connect } = useConnect({
    connector: new InjectedConnector(),
    chainId: chainId.goerli,
  });
  const { address } = useAccount();

  return (
    <header>
      {address ? (
        <p>{address}</p>
      ) : (
        <button onClick={() => connect()}>Connect wallet</button>
      )}
    </header>
  );
};

export default Header;
