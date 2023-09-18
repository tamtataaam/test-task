import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from 'api';
import { createStateValue } from 'helpers/createStateValue';

import { WordsState } from './types';

const initialState: WordsState = {
  numericValues: [],
  letterValues: [],
  mixedValues: [],
  alphabetSortOrder: null,
  timeSortOrder: 'desc',
  loading: false,
};

export const searchCountry = createAsyncThunk(
  'words/search',
  async (query: string, { rejectWithValue }) => {
    try {
      const data = await fetchData(query);
      return data;
    } catch (error) {
      return rejectWithValue(query);
    }
  }
);

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    setNumericValue: (state, { payload }: { payload: string }) => {
      const data = createStateValue(payload);
      state.numericValues.push(data);
    },
    setMixedValue: (state, { payload }: { payload: string }) => {
      const data = createStateValue(payload);
      state.mixedValues.push(data);
    },
    setAlphabetSortOrder: (
      state,
      { payload }: { payload: WordsState['alphabetSortOrder'] }
    ) => {
      state.alphabetSortOrder = payload;
    },
    setTimeSortOrder: (
      state,
      { payload }: { payload: WordsState['timeSortOrder'] }
    ) => {
      state.timeSortOrder = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchCountry.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchCountry.fulfilled, (state, { payload }) => {
        const value = state.letterValues.find((word) => word.value === payload);

        if (value) {
          state.letterValues = state.letterValues.map((word) => {
            if (word.value === payload) {
              return {
                ...word,
                count: (word.count += 1),
              };
            }
            return word;
          });
        } else {
          const data = createStateValue(payload);
          state.letterValues.push(data);
        }
      })
      .addCase(searchCountry.rejected, (state, { payload }) => {
        const data = createStateValue(payload as string);
        state.letterValues.push(data);

        state.loading = false;
      });
  },
});

export const {
  setNumericValue,
  setMixedValue,
  setAlphabetSortOrder,
  setTimeSortOrder,
} = wordsSlice.actions;
export default wordsSlice.reducer;
