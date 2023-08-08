import React from "react";
import"./YourPlan.css";
import CustomButtons from "../../components/CustomButtons/CustomButtons";

const YourPlan = (props) => {

const allPlans = [
    {
        planTitle: "Free",
        planPrice: "$0/month",
        hthree: "For hobby projects or small teams.",
        planFeature1: "1 Workspace",
        planFeature2: "Unlimited Traffic",
        planFeature3: "10GB Storage",
        planFeature4: "Basic Support",
        button: "CHOOSE PLAN",
        classes: "plan",
        btn: "green"
    },

    {
        planTitle: "PLUS",
        planPrice: "$29/month",
        hthree: "For ambitious projects.",
        planFeature1: "5 Workspace",
        planFeature2: "Unlimited Traffic",
        planFeature3: "100GB Storage",
        planFeature4: "Pluse Support",
        button: "CHOOSE PLAN",
        planA: "RECOMMENDED",
        classes: "plan plan--highlighted",
        btn: "black"
    },

    {
        planTitle: "PREMIUM",
        planPrice: "$99/month",
        hthree: "Your enterprise solution.",
        planFeature1: "10 Workspace",
        planFeature2: "Unlimited Traffic",
        planFeature3: "Unlimited Storage",
        planFeature4: "Priority Support",
        button: "CHOOSE PLAN",
        classes: "plan",
        btn: "green"
    }
]

  return (
    <section id="plans">
            <h1 className="section-title">Choose Your Plan</h1>
            <div className="plan__list">
                { allPlans.map(plan => (
                    <article className={plan.classes} key={plan.planTitle}>
                    <h1 className="plan__annotation">{plan.planA}</h1>
                    <h1 className="plan__title">{plan.planTitle}</h1>
                    <h2 className="plan__price">{plan.planPrice}</h2>
                    <h3>{plan.hthree}</h3>
                    <ul className="plan__features">
                        <li className="plan__feature">{plan.planFeature1}</li>
                        <li className="plan__feature">{plan.planFeature2}</li>
                        <li className="plan__feature">{plan.planFeature3}</li>
                        <li className="plan__feature">{plan.planFeature4}</li>
                    </ul>
                    <div>
                        <CustomButtons btnType={`${plan.btn}`} clicked={props.toggle}>
                            {plan.button}
                        </CustomButtons>
                    </div>
                </article>
                ))}
            </div>
        </section>
  )
}

export default YourPlan;