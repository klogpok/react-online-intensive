// Core
import React from 'react';
import { mount } from 'enzyme';
import { Composer } from '../Composer';

const props = {
    _createPost:         jest.fn(),
    avatar:              'Avatar',
    currenUserFirstName: 'Oleg',
};

const comment = 'Punk not death!';

const initialState = {
    comment: '',

};

const updatedState = {
    comment,

};

const result = mount(<Composer { ...props }/>);

const _submitCommentSpy = jest.spyOn(result.instance(), '_submitComment');
const _handleFormSubmitSpy = jest.spyOn(result.instance(), '_handleFormSubmit');
const _updateCommentSpy = jest.spyOn(result.instance(), '_updateComment');
const _submitOnEnterSpy = jest.spyOn(result.instance(), '_submitOnEnter');

describe('composer component', () => {
    test('should have 1 <<section>> element', () => {
        expect(result.find('section')).toHaveLength(1);
    });

    test('should have 1 <<form>> element', () => {
        expect(result.find('form')).toHaveLength(1);
    });

    test('should have 1 <<textarea>> element', () => {
        expect(result.find('textarea')).toHaveLength(1);
    });

    test('should have 1 <<input>> element', () => {
        expect(result.find('input')).toHaveLength(1);
    });

    test('should have 1 <<img>> element', () => {
        expect(result.find('img')).toHaveLength(1);
    });

    test('should have valid initial state', () => {
        expect(result.state()).toEqual(initialState);
    });

    test('textarea value should be empty initially', () => {
        expect(result.find('textarea').text()).toBe('');
    });

    test('should response to state change property', () => {
        result.setState({
            comment,
        });

        expect(result.state()).toEqual(updatedState);
        expect(result.find('textarea').text()).toBe(comment);

        result.setState({
            comment: '',
        });

        expect(result.state()).toEqual(initialState);
        expect(result.find('textarea').text()).toBe('');
    });

    test('should handle textarea <<change>> event', () => {
        result.find('textarea').simulate('change', {
            target: {
                value: comment,
            },
        });

        expect(_updateCommentSpy).toHaveBeenCalledTimes(1);
        expect(result.find('textarea').text()).toBe(comment);
        expect(result.state()).toEqual(updatedState);
    });

    test('should handle form <<submit>> event', () => {
        result.find('form').simulate('submit');

        expect(result.state()).toEqual(initialState);
    });

    test('_createPost prop should be invoked once after form submission', () => {
        expect(props._createPost).toHaveBeenCalledTimes(1);
    });

    test('_submitComment and _handleFormSubmit class methods should be invoked once after form is submited', () => {
        expect(_submitCommentSpy).toHaveBeenCalledTimes(1);
        expect(_handleFormSubmitSpy).toHaveBeenCalledTimes(1);
    });

    test('avatar and currentUserFirst name props is required', () => {
        expect(props.currenUserFirstName).toEqual('Oleg');
        expect(props.avatar).toEqual('Avatar');
    });

    test('should handle textarea <<onKeyPress>> event', () => {
        result.find('textarea').simulate('keypress', {
            key: 'Enterp',
        });

        expect(_submitOnEnterSpy).toHaveBeenCalledTimes(1);
    });
});
