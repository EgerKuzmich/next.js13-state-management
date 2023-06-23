import { persist } from 'zustand/middleware';
import { IOAuthCredentials } from '../type';
import { create } from 'zustand';

export const useOauthCredentials = create(
  persist<IOAuthCredentials>(
    (set) => ({
      access_token: '',
      token_type: '',
      expires_in: '',
      created_at: 0,
      set: (credentials: IOAuthCredentials) => set(credentials),
    }),
    {
      name: 'oauth-credentials',
    },
  ),
);
