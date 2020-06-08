import axios from 'axios';
import React, { Component } from 'react';

interface ILoaderState {
  data: any,
  isLoading: boolean
}

interface ILoaderProps {
  data: any
}

const withLoader = <P extends ILoaderState>(WrapComponent: React.ComponentType<P>, url: string) => {
  return class LoaderComponent extends Component<Partial<ILoaderProps>, ILoaderState> {
    constructor(props: any) {
      super(props);
      this.state = {
        data: null,
        isLoading: false
      };
    }

    componentDidMount() {
      this.setState({
        isLoading: true
      });
      axios.get(url).then((result) => {
        this.setState({
          data: result.data,
          isLoading: false
        });
      });
    }

    render() {
      const { data, isLoading } = this.state
      return (
        <>
          { (isLoading || !data) ? <p>data is loading</p> :
            <WrapComponent {...this.props as P} data={data} />
          }
        </>
      )
    }
  };
};

export default withLoader
