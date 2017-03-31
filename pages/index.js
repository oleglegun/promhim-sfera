import React, { PropTypes } from "react";
import Title from "../components/Title";
import Slider from "../components/Slider";
import TextBlock from "../components/TextBlock";
import AdvantageList from "../components/AdvantageList";
import BusinessLines from "../components/BusinessLines";
import TestimonialList from "../components/TestimonialList";
import QuestionsBlock from "../components/QuestionsBlock";
import Helmet from "react-helmet";
import { config } from "config";
import index_dict from "../dictionaries/index";


export default class Index extends React.Component {
    render() {
        const dict = index_dict[this.context.lang]

        return (
            <div>
                <Helmet
                    title={config[this.context.lang]}
                />
                <Slider text={dict.slider} />
                <section id="page-content">

                    <TextBlock text={dict.company_info} />

                    <Title title={dict.advantages_title} />
                    <AdvantageList items={dict.advantages_list} />

                    <Title title={dict.business_lines_title} />
                    <BusinessLines items={dict.business_lines_list} />

                    <Title title={dict.testimonials_title} />
                    <TestimonialList items={dict.testimonials_list} />

                    <QuestionsBlock title={dict.questions.title} body={dict.questions.body}
                                    button={dict.questions.button} />
                </section>
            </div>
        )
    }
}

Index.contextTypes = {
    lang: PropTypes.string.isRequired
}
