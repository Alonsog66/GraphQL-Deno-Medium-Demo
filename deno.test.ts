import { superoak } from 'https://deno.land/x/superoak@2.1.0/mod.ts';
import { describe, it } from 'https://deno.land/x/superoak@2.1.0/test/utils.ts';
import { expect } from 'https://deno.land/x/superoak@2.1.0/test/deps.ts';
import { app } from './server.tsx';

describe('GET request to root url', () => {
  it('Sends 200 Status and Content Type text/html', async (done) => {
    (await superoak(app)).get('/').end((err, res) => {
      expect(res.status).toEqual(200);
      expect(res.type).toEqual('text/html');
      done();
    });
  });
});

// deno test -A --unstable
