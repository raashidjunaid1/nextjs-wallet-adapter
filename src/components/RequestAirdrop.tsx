import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import type { TransactionSignature } from '@solana/web3.js';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import type { FC } from 'react';
import React, { useCallback } from 'react';
// import { useNotify } from './notify';

export const RequestAirdrop: FC = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    // const notify = useNotify();

    const onClick = useCallback(async () => {

        console.log('publicKey :>> ', publicKey?.toBase58());
        let signature: TransactionSignature | undefined = undefined;
        try {
            if (!publicKey) throw new Error('Wallet not connected!');

            signature = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL);
            console.log('info', 'Airdrop requested:', signature);

            await connection.confirmTransaction(signature, 'processed');
            console.log('success', 'Airdrop successful!', signature);
        } catch (error: any) {
            console.log('error', `Airdrop failed! ${error?.message}`, signature);
        }
    // }, [publicKey, connection, notify]);
    }, [publicKey, connection]);

    return (
        <button className='wallet-adapter-button wallet-adapter-button-trigger' onClick={onClick} disabled={!publicKey}>
            Request Airdrop
        </button>
    );
};
