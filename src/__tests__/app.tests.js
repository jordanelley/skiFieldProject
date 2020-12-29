import React from 'react';
import { render, fireEvent, waitFor, waitForElementToBeRemoved, screen } from '@testing-library/react';
import nock from 'nock';
import App from '../app';
import '@testing-library/jest-dom/extend-expect';

//todo when the app starts, renders existing ratings

describe('Ski field rating application', () => {
    // nock('http://localhost:5000')
    //     .defaultReplyHeaders({
    //         'access-control-allow-origin': '*',
    //         'access-control-allow-credentials': 'true'
    //     })
    //     .get('/reviews')
    //     .reply(200, []);
    nock('http://localhost:5000')
        .defaultReplyHeaders({
            'access-control-allow-origin': '*',
            'access-control-allow-credentials': 'true'
        })
        .post('/reviews')
        .reply(200)
        .get('/reviews')
        .reply(200, ['Test ski field 5 stars']);

    render(<App />);
    it('Should allow user to add a ski field rating', async () => {


// We must wait for this to avoid updated state after the component is unmounted.
        await waitFor(() => screen.getByText('name :'));
        const skiFieldInput = screen.getByLabelText('name :');
        const skiRatingInput = screen.getByLabelText('rating :');

        fireEvent.change(skiFieldInput, { target: { value: 'Test ski field' } })
        fireEvent.change(skiRatingInput, { target: { value: '5 stars' } })

        const submitButton = screen.getByText('submit');
        fireEvent.click(submitButton);
        const testSkiFieldRating = await waitFor(() => screen.getByText('Test ski field 5 stars'));
        expect(testSkiFieldRating).toBeInTheDocument();
    })

    it( 'Should render existing items - example with 1 item', async () => {
        const testSkiFieldRating = await waitFor(() => screen.getByText('Test ski field 5 stars'));
        expect(testSkiFieldRating).toBeInTheDocument();
    })
    }
)