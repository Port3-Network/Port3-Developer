import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import '@stoplight/elements/styles.min.css';
export type IApiProps = {
    layout: string
}

const Api: React.FC<IApiProps> = ({ layout = 'sidebar' }) => {
    const { API } = require('@stoplight/elements');
    return (
        <Layout
            title={`API Reference`}
            description="Dyte REST API Reference"
            noFooter
        >
            <div className="header">
                <BrowserOnly
                >
                    {() => {
                        // eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
                        const { API } = require('@stoplight/elements');

                        return (
                            <div >
                                <API
                                    className="stacked"
                                    apiDescriptionUrl={`/api/soquest.yaml`}
                                    basePath="/"
                                    router="hash"
                                    layout={layout}
                                    hideSchemas
                                    hideInternal
                                />
                            </div>
                        );
                    }}
                </BrowserOnly>
            </div>
        </Layout>
    );
}

export default Api;