import cases from 'jest-in-case';

import { Photos, Photo } from '.';
import selectors from './selectors';

// lazy loading can cause image dublicates, the following cases should help with testing this issue
describe('getUniquePhotos', () => {
  cases(
    'getUniquePhotos parameters photos and photoIds, both are not empty) ',
    ({
      photos,
      photoIds,
      expected1,
      expected2,
    }: {
      photos: Photos;
      photoIds: Set<unknown>;
      expected1: Set<unknown>;
      expected2: Photo[];
    }) => {
      const result = selectors.getUniquePhotos(photos, photoIds);
      expect(result.newPhotoIds).toEqual(expected1);
      expect(result.newPhotos).toEqual(expected2);
    },
    {
      'photos: 4, photoIds: 4': {
        photos: {
          page: 1,
          pages: 20,
          perpage: 3,
          photo: [
            [
              {
                farm: 66,
                id: '53100893696',
                isfamily: 0,
                isfriend: 0,
                ispublic: 1,
                owner: '57862012@N06',
                secret: '27e5127016',
                server: '65535',
                title: 'Glootz',
              },
              {
                farm: 66,
                id: '53101067824',
                isfamily: 0,
                isfriend: 0,
                ispublic: 1,
                owner: '57862012@N06',
                secret: 'ea1fabfbc8',
                server: '65535',
                title: 'Baby senior',
              },
              {
                farm: 66,
                id: '53134544351',
                isfamily: 0,
                isfriend: 0,
                ispublic: 1,
                owner: '57862012@N06',
                secret: 'b1313d8c16',
                server: '65535',
                title: 'Portrait of Arry 6',
              },
            ],
          ],
        },
        photoIds: new Set(['53100893696', '53100893696', '53101067824', '53134544351', '53134544351', '53134544351']),
        expected1: new Set(['53100893696', '53101067824', '53134544351', undefined]),
        expected2: [
          [
            {
              farm: 66,
              id: '53100893696',
              isfamily: 0,
              isfriend: 0,
              ispublic: 1,
              owner: '57862012@N06',
              secret: '27e5127016',
              server: '65535',
              title: 'Glootz',
            },
            {
              farm: 66,
              id: '53101067824',
              isfamily: 0,
              isfriend: 0,
              ispublic: 1,
              owner: '57862012@N06',
              secret: 'ea1fabfbc8',
              server: '65535',
              title: 'Baby senior',
            },
            {
              farm: 66,
              id: '53134544351',
              isfamily: 0,
              isfriend: 0,
              ispublic: 1,
              owner: '57862012@N06',
              secret: 'b1313d8c16',
              server: '65535',
              title: 'Portrait of Arry 6',
            },
          ],
        ],
      },
    },
  );
  cases(
    'getUniquePhotos parameter photoIds, is empty) ',
    ({
      photos,
      photoIds,
      expected1,
      expected2,
    }: {
      photos: Photos;
      photoIds: Set<unknown>;
      expected1: Set<unknown>;
      expected2: Photo[];
    }) => {
      const result = selectors.getUniquePhotos(photos, photoIds);
      expect(result.newPhotoIds).toEqual(expected1);
      expect(result.newPhotos).toEqual(expected2);
    },
    {
      'photos: 4, photoIds: 4': {
        photos: {
          page: 1,
          pages: 20,
          perpage: 3,
          photo: [
            [
              {
                farm: 66,
                id: '53100893696',
                isfamily: 0,
                isfriend: 0,
                ispublic: 1,
                owner: '57862012@N06',
                secret: '27e5127016',
                server: '65535',
                title: 'Glootz',
              },
            ],
          ],
        },
        photoIds: new Set([]),
        expected1: new Set([undefined]),
        expected2: [
          [
            {
              farm: 66,
              id: '53100893696',
              isfamily: 0,
              isfriend: 0,
              ispublic: 1,
              owner: '57862012@N06',
              secret: '27e5127016',
              server: '65535',
              title: 'Glootz',
            },
          ],
        ],
      },
    },
  );
});
