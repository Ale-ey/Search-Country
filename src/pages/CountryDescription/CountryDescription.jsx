import { useLocation, useNavigate, useParams } from "react-router";

export const CountryDescription = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { name } = useParams();
  const country = state?.country;

  if (!country) {
    return (
      <div className="p-6">
        <p className="text-red-600">No country data found. Please go back.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-2 bg-gray-300 rounded-lg"
        >
          ← Back
        </button>
      </div>
    );
  }

  // Get native name (first available language)
  const nativeName =
    country.name?.nativeName &&
    Object.values(country.name.nativeName)[0]?.official;

  // Get currency string
  const currencyString =
    country.currencies &&
    Object.values(country.currencies)
      .map((cur) => `${cur.name} (${cur.symbol})`)
      .join(", ");

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 transition-theme min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="px-8 bg-gray-300 dark:bg-white text-black rounded-lg py-2 text-center my-4 cursor-pointer hover:bg-gray-200 font-semibold"
      >
        ← Back
      </button>

      {/* Grid layout */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Flag */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={country.flags?.png || country.flags?.svg}
            alt={`${country.name.common} flag`}
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Country Info */}
        <div>
          <h1 className="text-3xl font-bold mb-6">
            {country.name.common || "Unnamed"}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Info */}
            <div className="space-y-1">
              <p>
                <strong>Official Name:</strong> {nativeName || "N/A"}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {country.population?.toLocaleString() || "N/A"}
              </p>
              <p>
                <strong>Region:</strong> {country.region || "N/A"}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
              </p>
            </div>

            {/* Right Info */}
            <div className="space-y-1">
              <p>
                <strong>Top Level Domain:</strong> {country.tld?.[0] || "N/A"}
              </p>
              <p>
                <strong>Currencies:</strong> {currencyString || "N/A"}
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {(country.languages &&
                  Object.values(country.languages).join(", ")) ||
                  "N/A"}
              </p>
            </div>
          </div>

          {/* Border Countries */}
          <div className="mt-8 ">
            <h2 className="font-semibold mb-2 text-lg">Border Countries:</h2>
            <div className="flex flex-wrap gap-2">
              {country.borders?.length ? (
                country.borders.map((border) => (
                  <button
                    key={border}
                    className="rounded-xl px-6 py-1 bg-gray-200 dark:bg-white dark:text-black text-sm font-medium"
                  >
                    {border}
                  </button>
                ))
              ) : (
                <p>No bordering countries</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
