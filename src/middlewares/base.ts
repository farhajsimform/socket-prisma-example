import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect, { Options } from 'next-connect';



const base = (options: Options<NextApiRequest, NextApiResponse> = null) => {


    return nextConnect<NextApiRequest, NextApiResponse>({
        onError: (err, req, res) => {
            if (err.props) {
                // Handling Next.js error
                const { statusCode = 500, message = 'Something went wrong' } =
                    err.props;

                return res.status(statusCode).json({ error: message });
            }

            res.status(500).json({
                error: err.message ?? 'Something went wrong',
            });
        },
        onNoMatch: (_, res) => {
            res.status(405).json({ error: 'Method not allowed' });
        },
        ...options,
    });
};

export { base };
